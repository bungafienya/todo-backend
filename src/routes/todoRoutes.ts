import { Router } from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todoController';
import { validateTodo, validateUpdateTodo } from '../middlewares/validator';
import { getTodos, getTodoById, createTodo, updateTodo, deleteTodo } from '../controllers/todoController';

const router = Router();

// GET /api/todos — Ambil semua todo milik user
router.get('/', getTodos);

// POST /api/todos — Tambah todo baru
router.post('/', validateTodo, createTodo);

// PUT /api/todos/:id — Update todo (task atau status selesai)
router.put('/:id', validateUpdateTodo, updateTodo);

// DELETE /api/todos/:id — Hapus todo
router.delete('/:id', deleteTodo);

// GET /api/todos/:id — Ambil satu todo berdasarkan ID
router.get('/:id', getTodoById);

export default router;
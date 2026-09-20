import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AppBar, Toolbar, Typography, Container, Button, Paper, TextField, Box, IconButton, List, ListItem, ListItemText, Checkbox, CircularProgress, Alert } from '@mui/material';

function TodoPage() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('resume-todos') || '[]'));
  const [text, setText] = useState('');
  const save = (next) => { setTasks(next); localStorage.setItem('resume-todos', JSON.stringify(next)); };
  const add = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    save([...tasks, { id: Date.now(), text: text.trim(), done: false }]);
    setText('');
  };
  return <Paper sx={{ p: 3 }}>
    <Typography variant="h4" gutterBottom>TODO list</Typography>
    <Box component="form" onSubmit={add} sx={{ display: 'flex', gap: 1 }}>
      <TextField fullWidth size="small" value={text} onChange={(event) => setText(event.target.value)} label="Нове завдання" />
      <Button type="submit" variant="contained">Додати</Button>
    </Box>
    <List>{tasks.map((task) => <ListItem key={task.id} secondaryAction={<Button color="error" onClick={() => save(tasks.filter((item) => item.id !== task.id))}>Видалити</Button>}>
      <Checkbox checked={task.done} onChange={() => save(tasks.map((item) => item.id === task.id ? { ...item, done: !item.done } : item))} />
      <ListItemText primary={task.text} sx={{ textDecoration: task.done ? 'line-through' : 'none', color: task.done ? 'text.disabled' : 'text.primary' }} />
    </ListItem>)}</List>
    <Typography color="text.secondary">Усього завдань: {tasks.length}</Typography>
  </Paper>;
}

function SwapiPage() {
  const [path, setPath] = useState('people/1');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const getInfo = async (event) => {
    event.preventDefault(); setLoading(true); setError(''); setData(null);
    try {
      const response = await fetch(`https://swapi.py4e.com/api/${path.replace(/^\/+/, '')}`);
      if (!response.ok) throw new Error(`Помилка сервера: ${response.status}`);
      setData(await response.json());
    } catch (requestError) { setError(requestError.message); }
    finally { setLoading(false); }
  };
  return <Paper sx={{ p: 3 }}>
    <Typography variant="h4" gutterBottom>SWAPI</Typography>
    <Box component="form" onSubmit={getInfo} sx={{ display: 'flex', gap: 1, mb: 2 }}>
      <TextField fullWidth value={path} onChange={(event) => setPath(event.target.value)} label="Шлях API" helperText="Наприклад: people/1 або planets/1" />
      <Button type="submit" variant="contained" disabled={loading}>{loading ? <CircularProgress size={22} /> : 'Get info'}</Button>
    </Box>
    {error && <Alert severity="error">{error}</Alert>}
    {data && <Box component="pre" sx={{ m: 0, p: 2, overflow: 'auto', borderRadius: 1, bgcolor: '#eef3fa', fontSize: 13 }}>{JSON.stringify(data, null, 2)}</Box>}
  </Paper>;
}

function ResumePage() {
  return <Paper sx={{ p: 4 }}><Typography variant="h3" gutterBottom>Сич Олег</Typography><Typography color="text.secondary">Frontend Developer · React · JavaScript · Redux</Typography><Typography sx={{ mt: 2 }}>Створюю зрозумілі й адаптивні вебзастосунки. Мої навички: HTML, CSS, JavaScript, React, Redux, REST API.</Typography></Paper>;
}

function App() {
  const [page, setPage] = useState('resume');
  const pages = { resume: <ResumePage />, todo: <TodoPage />, swapi: <SwapiPage /> };
  return <><AppBar position="static"><Toolbar><Typography sx={{ flexGrow: 1 }}>Моє резюме</Typography><Button color="inherit" onClick={() => setPage('resume')}>Головна</Button><Button color="inherit" onClick={() => setPage('todo')}>TODO</Button><Button color="inherit" onClick={() => setPage('swapi')}>SWAPI</Button></Toolbar></AppBar><Container sx={{ py: 5, minHeight: 'calc(100vh - 128px)' }}>{pages[page]}</Container><Box component="footer" sx={{ textAlign: 'center', p: 3, bgcolor: '#172b4d', color: '#fff' }}>Контакти: alex@example.com · +380 00 000 00 00</Box></>;
}

createRoot(document.getElementById('root')).render(<App />);

import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const OPTIONS = [{ emoji: '😀', name: 'Радість' }, { emoji: '😊', name: 'Посмішка' }, { emoji: '😎', name: 'Круто' }, { emoji: '🤩', name: 'Захват' }, { emoji: '😍', name: 'Любов' }];
class SmileVote extends React.Component {
  constructor(props) { super(props); this.state = { votes: JSON.parse(localStorage.getItem('smile-votes') || '{}'), showResult: false }; }
  componentDidUpdate() { localStorage.setItem('smile-votes', JSON.stringify(this.state.votes)); }
  vote = (name) => this.setState(({ votes }) => ({ votes: { ...votes, [name]: (votes[name] || 0) + 1 }, showResult: false }));
  clear = () => { localStorage.removeItem('smile-votes'); this.setState({ votes: {}, showResult: false }); };
  render() { const { votes, showResult } = this.state; const winner = OPTIONS.reduce((best, item) => (votes[item.name] || 0) > (votes[best.name] || 0) ? item : best, OPTIONS[0]); const count = votes[winner.name] || 0;
    return <main className="vote"><h1>Голосування за найкращий смайлик</h1><div className="smiles">{OPTIONS.map(({ emoji, name }) => <button key={name} onClick={() => this.vote(name)} aria-label={name}><span>{emoji}</span><b>{votes[name] || 0}</b></button>)}</div><button className="primary" onClick={() => this.setState({ showResult: true })}>Показати результат</button><button className="clear" onClick={this.clear}>Очистити результати</button>{showResult && <section><h2>Результати голосування</h2><h3>Переможець:</h3><div className="winner">{winner.emoji}</div><p>Кількість голосів: <b>{count}</b></p></section>}</main>; }
}
createRoot(document.getElementById('root')).render(<SmileVote />);

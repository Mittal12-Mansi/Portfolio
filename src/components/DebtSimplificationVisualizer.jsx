import React, { useState } from 'react';
import { ArrowRight, RefreshCw, CheckCircle2, Zap, DollarSign } from 'lucide-react';

export default function DebtSimplificationVisualizer() {
  // Preset group expenses
  const [expenses, setExpenses] = useState([
    { id: 1, payer: 'Alice', amount: 120, splitWith: ['Bob', 'Charlie', 'David'] },
    { id: 2, payer: 'Bob', amount: 60, splitWith: ['Alice', 'Charlie'] },
    { id: 3, payer: 'Charlie', amount: 90, splitWith: ['Alice', 'David'] },
  ]);

  const [isSimplified, setIsSimplified] = useState(false);

  // Compute naive transactions
  // Alice paid 120 for 4 people -> $30 each (Bob owes Alice 30, Charlie owes Alice 30, David owes Alice 30)
  // Bob paid 60 for 2 people (Bob, Charlie) -> $30 each (Charlie owes Bob 30)
  // Charlie paid 90 for 2 people (Charlie, David) -> $45 each (David owes Charlie 45)

  const naiveTransactions = [
    { from: 'Bob', to: 'Alice', amount: 30 },
    { from: 'Charlie', to: 'Alice', amount: 30 },
    { from: 'David', to: 'Alice', amount: 30 },
    { from: 'Charlie', to: 'Bob', amount: 30 },
    { from: 'David', to: 'Charlie', amount: 45 },
  ];

  // Simplified graph-algorithm output (Min Cash Flow algorithm)
  // Net Balances:
  // Alice: +120 - 30 = +90
  // Bob: -30 + 60 - 30 = 0
  // Charlie: -30 - 30 + 90 - 45 = -15
  // David: -30 - 45 = -75
  // Simplified transfers:
  // David pays Alice $75
  // Charlie pays Alice $15
  // Total transactions: 2 (versus 5 naive transactions -> 60% reduction!)

  const simplifiedTransactions = [
    { from: 'David', to: 'Alice', amount: 75, badge: 'Net Settlement' },
    { from: 'Charlie', to: 'Alice', amount: 15, badge: 'Net Settlement' },
  ];

  return (
    <div style={{
      background: 'rgba(15, 23, 42, 0.9)',
      border: '1px solid var(--border-bright)',
      borderRadius: 'var(--radius-md)',
      padding: '1.5rem',
      marginTop: '1.2rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.8rem' }}>
        <div>
          <div style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--accent-sde)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Zap size={16} /> Interactive Graph Debt-Simplification Visualizer
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Demonstrating Mansi's Min-Cash-Flow Greedy Graph Algorithm (60% settlement reduction)
          </div>
        </div>

        <button
          onClick={() => setIsSimplified(!isSimplified)}
          className="btn btn-sde"
          style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
        >
          <RefreshCw size={14} className={isSimplified ? 'spin' : ''} />
          {isSimplified ? 'Reset to Naive Pairwise' : 'Run Graph Simplification Algorithm'}
        </button>
      </div>

      {/* Comparison Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
        
        {/* Left: Input Expenses & State */}
        <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
            Group Expense Log
          </div>
          {expenses.map((e) => (
            <div key={e.id} style={{ fontSize: '0.82rem', marginBottom: '0.4rem', color: 'var(--text-secondary)', display: 'flex', justifyContent: 'space-between' }}>
              <span>💸 <strong>{e.payer}</strong> paid ${e.amount}</span>
              <span style={{ color: 'var(--text-muted)' }}>Split: {e.splitWith.join(', ')}</span>
            </div>
          ))}
          <div style={{ marginTop: '0.8rem', paddingTop: '0.8rem', borderTop: '1px dashed var(--border-color)', fontSize: '0.8rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={14} /> 1-Click UPI Payment Links & PDF/CSV Export Ready
          </div>
        </div>

        {/* Right: Algorithm Output */}
        <div style={{
          background: isSimplified ? 'rgba(6, 182, 212, 0.08)' : 'rgba(255, 255, 255, 0.02)',
          padding: '1rem',
          borderRadius: 'var(--radius-sm)',
          border: isSimplified ? '1px solid rgba(6, 182, 212, 0.4)' : '1px solid var(--border-color)',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '700', color: isSimplified ? '#38bdf8' : 'var(--text-muted)', textTransform: 'uppercase' }}>
              {isSimplified ? '🚀 Optimized Graph Settlements (2 Transfers)' : '⚠️ Naive Pairwise Settlements (5 Transfers)'}
            </span>
            {isSimplified && (
              <span className="badge badge-success" style={{ fontSize: '0.7rem' }}>
                60% Fewer Transfers
              </span>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {(isSimplified ? simplifiedTransactions : naiveTransactions).map((tx, idx) => (
              <div key={idx} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.45rem 0.75rem',
                borderRadius: '6px',
                background: isSimplified ? 'rgba(6, 182, 212, 0.12)' : 'rgba(0, 0, 0, 0.2)',
                fontSize: '0.85rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}>
                  <span>{tx.from}</span>
                  <ArrowRight size={14} style={{ color: 'var(--accent-sde)' }} />
                  <span>{tx.to}</span>
                </div>
                <div style={{ fontWeight: '700', color: '#10b981' }}>
                  ${tx.amount}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

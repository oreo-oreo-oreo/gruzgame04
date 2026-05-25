'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import styles from './page.module.css';

export default function Home() {
  const { address, isConnected, isConnecting, isReconnecting } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  if (isReconnecting) {
    return (
      <main className={styles.main}>
        <p>Reconnecting wallet...</p>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Gruz Game 04</h1>
      <p className={styles.subtitle}>Base App scaffold — add your game logic here.</p>

      {!isConnected ? (
        <div className={styles.actions}>
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              type="button"
              className={styles.button}
              onClick={() => connect({ connector })}
              disabled={isConnecting}
            >
              Connect {connector.name}
            </button>
          ))}
        </div>
      ) : (
        <div className={styles.connected}>
          <span className={styles.address}>
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </span>
          <button type="button" className={styles.button} onClick={() => disconnect()}>
            Disconnect
          </button>
        </div>
      )}
    </main>
  );
}

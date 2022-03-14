const endpoint = {
  http: {
    devnet: 'http://api.devnet.kunci.network',
    testnet: 'http://api.testnet.kunci.network',
    'mainnet-beta': 'http://api.mainnet.kunci.network',
  },
  https: {
    devnet: 'https://api.devnet.kunci.network',
    testnet: 'https://api.testnet.kunci.network',
    'mainnet-beta': 'https://api.mainnet.kunci.network',
  },
};

export type Cluster = 'devnet' | 'testnet' | 'mainnet-beta';

/**
 * Retrieves the RPC API URL for the specified cluster
 */
export function clusterApiUrl(cluster?: Cluster, tls?: boolean): string {
  const key = tls === false ? 'http' : 'https';

  if (!cluster) {
    return endpoint[key]['devnet'];
  }

  const url = endpoint[key][cluster];
  if (!url) {
    throw new Error(`Unknown ${key} cluster: ${cluster}`);
  }
  return url;
}

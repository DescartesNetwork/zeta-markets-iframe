import { Net } from '@sentre/senhub'

/**
 * Contructor
 */
type Conf = {
  node: string
}

const conf: Record<Net, Conf> = {
  /**
   * Development configurations
   */
  devnet: {
    node: 'https://devnet.zeta.markets/',
  },

  /**
   * Staging configurations
   */
  testnet: {
    node: '',
  },

  /**
   * Production configurations
   */
  mainnet: {
    node: 'https://mainnet.zeta.markets/',
  },
}

/**
 * Module exports
 */
export default conf

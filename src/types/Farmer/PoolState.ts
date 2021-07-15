export interface PoolState {
  authentication_token_timeout: number;
  current_difficulty: number;
  current_points: number;
  next_farmer_update: number;
  next_pool_info_update: number;
  p2_singleton_puzzle_hash: string;
  points_acknowledged_24h: [number, number][];
  points_acknowledged_since_start: number;
  points_found_24h: [number, number][];
  points_found_since_start: number;
  pool_config: {
    authentication_public_key: string;
    launcher_id: string;
    owner_public_key: string;
    p2_singleton_puzzle_hash: string;
    payout_instructions: string;
    pool_url: string;
    target_puzzle_hash: string;
  };
  pool_errors_24h: { error_code: number; error_message: string }[];
}

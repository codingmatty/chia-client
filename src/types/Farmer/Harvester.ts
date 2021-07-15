export interface Harvester {
  connection: {
    host: string;
    node_id: string;
    port: number;
  };
  failed_to_open_filenames: string[];
  no_key_filenames: string[];
  plots: Plot[];
}

interface Plot {
  file_size: number;
  filename: string;
  plot_id: string;
  plot_public_key: string;
  pool_contract_puzzle_hash: string | null;
  pool_public_key: string | null;
  size: number;
  time_modified: number;
}

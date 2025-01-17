import { ProofOfSpace } from "../FullNode/ProofOfSpace";
import { RpcResponse } from "../RpcResponse";
import { Harvester } from "./Harvester";
import { PoolState } from "./PoolState";
import { SignagePoint } from "./SignagePoint";

export interface SignagePointResponse extends RpcResponse {
  signage_point: SignagePoint;
  proofs: ProofOfSpace[];
}

export interface SignagePointsResponse extends RpcResponse {
  signage_points: {
    signage_point: SignagePoint;
    proofs: ProofOfSpace[];
  }[];
}

export interface RewardTargetResponse extends RpcResponse {
  farmer_target: string;
  pool_target: string;
  have_farmer_sk?: boolean;
  have_pool_sk?: boolean;
}

export interface PoolStateResponse extends RpcResponse {
  pool_state: PoolState[];
}

export interface HarvestersResponse extends RpcResponse {
  harvesters: Harvester[];
}

export interface PoolLoginLinkResponse extends RpcResponse {
  login_link: string;
}

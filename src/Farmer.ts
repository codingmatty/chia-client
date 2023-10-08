import {
  HarvestersResponse,
  PoolLoginLinkResponse,
  PoolStateResponse,
  RewardTargetResponse,
  SignagePointResponse,
  SignagePointsResponse,
} from "./types/Farmer/RpcResponse";
import { ChiaOptions, RpcClient } from "./RpcClient";
import { RpcResponse } from "./types/RpcResponse";

class Farmer extends RpcClient {
  public constructor(options: ChiaOptions) {
    super({
      hostname: options.hostname,
      port: options.port,
      certPath: options.certPath,
      keyPath: options.keyPath,
    });
  }

  public async getSignagePoint(
    signagePointHash: string
  ): Promise<SignagePointResponse> {
    return this.request<SignagePointResponse>("get_signage_point", {
      sp_hash: signagePointHash,
    });
  }

  public async getSignagePoints(): Promise<SignagePointsResponse> {
    return this.request<SignagePointsResponse>("get_signage_points", {});
  }

  public async getRewardTarget(
    searchForPrivateKey: boolean
  ): Promise<RewardTargetResponse> {
    return this.request<RewardTargetResponse>("get_reward_targets", {
      search_for_private_key: searchForPrivateKey,
    });
  }

  public async setRewardTarget(
    farmerTarget?: string,
    poolTarget?: string
  ): Promise<RpcResponse> {
    return this.request<RpcResponse>("set_reward_targets", {
      farmer_target: farmerTarget,
      pool_target: poolTarget,
    });
  }

  public async getPoolState(): Promise<PoolStateResponse> {
    return this.request<PoolStateResponse>("get_pool_state", {});
  }

  public async setPayoutInstructions(
    launcherId: string,
    payoutInstructions: string
  ): Promise<RpcResponse> {
    return this.request<RpcResponse>("set_payout_instructions", {
      launcher_id: launcherId,
      payout_instructions: payoutInstructions,
    });
  }

  public async getHarvesters(): Promise<HarvestersResponse> {
    return this.request<HarvestersResponse>("get_harvesters", {});
  }

  public async getPoolLoginLink(
    launcherId: string
  ): Promise<PoolLoginLinkResponse> {
    return this.request<PoolLoginLinkResponse>("get_pool_login_link", {
      launcher_id: launcherId,
    });
  }
}

export { Farmer };

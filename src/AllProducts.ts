import { BlockData } from "./Components/Blockbuster_Deals/BlockData";
import { TopdealsData } from "./Components/TopDeals/topdeal";
import { JewelleryData } from "./Components/TrendingJewellery/trendData";
import { PerfumeData } from "./Components/TopPerfumes/perfumeData";
import { WatchData } from "./Components/TopWatches/watchData";
import { UnderData } from "./Components/Under_299/underData";

export const AllProducts = [
  ...BlockData,
  ...TopdealsData,
  ...JewelleryData,
  ...PerfumeData,
  ...WatchData,
  ...UnderData,
];

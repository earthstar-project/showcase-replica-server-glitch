import { FormatValidatorEs4, Replica } from "earthstar";
import { ReplicaDriverSqlite } from "earthstar/node";
import {
  ExtensionKnownShares,
  ExtensionServeContent,
  ExtensionSyncHttp,
  ReplicaServer,
} from "@earthstar-project/replica-server";

// Set the share you want to serve content from in the .env file
const SHARE_TO_SERVE_CONTENT_FROM = process.env.SOURCE_SHARE;

new ReplicaServer([
  new ExtensionKnownShares({
    // Set the shares you want your replica server to have at data/known_shares.json
    knownSharesPath: ".data/known_shares.json",
    onCreateReplica: (shareAddress) => {
      // Persist replicas using sqlite
      return new Replica(
        shareAddress,
        FormatValidatorEs4,
        new ReplicaDriverSqlite({
          share: shareAddress,
          mode: "create-or-open",
          filename: `.data/${shareAddress}.sqlite`,
        }),
      );
    },
  }),
  new ExtensionSyncHttp({
    path: "/earthstar-api/v2",
  }),
  new ExtensionServeContent({
    sourceShare: SHARE_TO_SERVE_CONTENT_FROM,
  }),
]);

console.log(
  `Request share content for ${SHARE_TO_SERVE_CONTENT_FROM} at https://${process.env.PROJECT_DOMAIN}.glitch.me/<doc path here>`,
);

console.log(
  `Sync with this server at https://${process.env.PROJECT_DOMAIN}.glitch.me/earthstar-api/v2`,
);

# Earthstar Showcase Replica Server for Glitch

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button-v2.svg)](https://glitch.com/edit/#!/remix/earthstar-showcase-replica-server)

Want your own replica server? Want your own replica server that is also able to serve content from your shares through the web?

1. Click the button above.
2. Create a file at `.data/known_shares.json`
3. Add the shares you'd like your replica server to know about as an array, like
   this: `["+myshare.a123", "yourshare.b234"]`
4. Open the `.env` file and assign a share to `SOURCE_SHARE`, like this: `SOURCE_SHARE=+myshare.a123`
4. Check the logs for the URL to sync with!

If you'd like to further customise your replica server, you can learn more about
replica servers and their extensions at the main
[replica server repo](https://github.com/earthstar-project/replica-server).

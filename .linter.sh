#!/bin/bash
cd /home/kavia/workspace/code-generation/codequest-rewards-5649-5657/main_container_for_codequest_rewards
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


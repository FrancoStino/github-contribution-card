# Multi-stage build: clone source repo (needed because action/src/index.ts
# imports from ../../src/ and ../../getContributors.ts, outside the Docker
# build context which is limited to action/), build with webpack, then run.
#
# Build args:
#   ACTION_REPO  - GitHub repo (default: this repo)
#   ACTION_REF   - Branch, tag, or SHA (default: main)
#
# Caveat: Docker build always clones ACTION_REF (default: main), even when
# the action is pinned to a specific ref via uses: repo/action@abc123.
# For reproducible builds, pin to a commit SHA and set ACTION_REF accordingly.
FROM node:24-alpine AS builder

ARG ACTION_REPO=FrancoStino/github-contribution-card
ARG ACTION_REF=main

RUN apk add --no-cache git

RUN git clone --depth 1 --branch "${ACTION_REF}" \
    "https://github.com/${ACTION_REPO}.git" /build

WORKDIR /build

RUN yarn install --frozen-lockfile && \
    yarn build:action

# --- Stage 2: Runner - minimal image with only the built action ---
FROM node:24-alpine

COPY --from=builder /build/action/dist/index.js /action/dist/index.js

ENTRYPOINT ["node", "/action/dist/index.js"]

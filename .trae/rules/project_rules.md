# Project Rules

## Development Environment

This project uses **devbox** for environment management. Before building or running the project, you must ensure that you are working within the devbox environment.

### Prerequisites

1. Make sure devbox is installed on your system
2. Always enter the devbox environment before performing any build operations:
   ```bash
   devbox shell
   ```

### Build Process

- **IMPORTANT**: All build commands must be executed within the devbox environment
- Do not attempt to build the project outside of the devbox shell
- The devbox configuration is defined in `devbox.json` and `devbox.lock` files

This ensures consistent dependencies and build environment across all development setups.
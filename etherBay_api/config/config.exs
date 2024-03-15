# This file is responsible for configuring your application
# and its dependencies with the aid of the Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

config :etherBay_api,
  ecto_repos: [EtherBayApi.Repo],
  generators: [timestamp_type: :utc_datetime, binary_id: true]

# Configures the endpoint
config :etherBay_api, EtherBayApiWeb.Endpoint,
  url: [host: "localhost"],
  adapter: Bandit.PhoenixAdapter,
  render_errors: [
    formats: [json: EtherBayApiWeb.ErrorJSON],
    layout: false
  ],
  pubsub_server: EtherBayApi.PubSub,
  live_view: [signing_salt: "6DeV/GIj"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :etherBay_api, EtherBayApiWeb.Auth.Guardian,
  issuer: "etherBay_api",
  secret_key: "RcMVRAzlUvS0t4D5rGRqQMowC5k58TeAwBPT7s8BzgwPVKkVDsRKICrc6uyF7UiJ"

config :guardian, Guardian.DB,
  repo: EtherBayApi.Repo,
  schema_name: "guardian_tokens",
  sweep_interval: 60

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"

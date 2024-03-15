defmodule EtherBayApi.Repo do
  use Ecto.Repo,
    otp_app: :etherBay_api,
    adapter: Ecto.Adapters.Postgres
end

defmodule EtherBayApiWeb.Auth.Pipeline do
  use Guardian.Plug.Pipeline,
    otp_app: :etherBay_api,
    module: EtherBayApiWeb.Auth.Guardian,
    error_handler: EtherBayApiWeb.Auth.GuardianErrorHandler

  plug(Guardian.Plug.VerifySession)
  plug(Guardian.Plug.VerifyHeader)
  plug(Guardian.Plug.EnsureAuthenticated)
  plug(Guardian.Plug.LoadResource)
end

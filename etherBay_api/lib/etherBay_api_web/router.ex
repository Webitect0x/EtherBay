defmodule EtherBayApiWeb.Router do
  use EtherBayApiWeb, :router
  use Plug.ErrorHandler

  defp handle_errors(conn, %{reason: %{message: message}}) do
    conn
    |> json(%{errors: message})
    |> halt()
  end

  pipeline :api do
    plug(:accepts, ["json"])
    plug(:fetch_session)
  end

  pipeline :auth do
    plug(EtherBayApiWeb.Auth.Pipeline)
    plug(EtherBayApiWeb.Auth.SetAccount)
  end

  scope "/api", EtherBayApiWeb do
    pipe_through(:api)

    get("/listings/show", ListingController, :index)
    get("/listing/:id", ListingController, :show)
    get("/accounts/user/:username", AccountController, :show)

    post("/accounts/create", AccountController, :create)
    post("/accounts/sign_in", AccountController, :sign_in)
    post("/accounts/upload", AccountController, :upload_image)
    get("/messages/chat/:id", MessageController, :show)
  end

  scope "/api", EtherBayApiWeb do
    pipe_through([:api, :auth])

    get("/account/inbox", AccountController, :account_inbox)
    get("/accounts/current", AccountController, :current_account)
    get("/messages/:receiver_id", MessageController, :get_message_data)

    post("/listing/create", ListingController, :create)
  end
end

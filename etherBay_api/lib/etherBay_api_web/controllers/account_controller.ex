defmodule EtherBayApiWeb.AccountController do
  use EtherBayApiWeb, :controller
  import Plug.Conn

  alias EtherBayApiWeb.{Auth.Guardian, Auth.ErrorResponse}
  alias EtherBayApi.{Accounts.Account, Accounts}

  action_fallback(EtherBayApiWeb.FallbackController)

  def index(conn, _params) do
    accounts = Accounts.list_accounts()
    render(conn, :index, accounts: accounts)
  end

  def create(conn, %{"account" => account_params}) do
    case Accounts.get_account_by_username(account_params["username"]) do
      nil ->
        {:ok, %Account{} = account} = Accounts.create_account(account_params)
        authorize_account(conn, account.username, account_params["password"])

      _account ->
        raise ErrorResponse.UnAuthorized, message: "Account already exists"
    end
  end

  def sign_in(conn, %{"username" => username, "password" => password}) do
    authorize_account(conn, username, password)
  end

  defp authorize_account(conn, username, password) do
    case Guardian.authenticate(username, password) do
      {:ok, account, token} ->
        conn
        |> put_session(:account_id, account.id)
        |> put_status(:ok)
        |> render(:account_token, account: account, token: token)

      {:error, :not_found} ->
        raise ErrorResponse.UnAuthorized, message: "Account doesn't exist"

      {:error, :unauthorized} ->
        raise ErrorResponse.UnAuthorized, message: "Email or password incorrect"
    end
  end

  def current_account(conn, %{}) do
    conn
    |> put_status(:ok)
    |> render(:show, %{account: conn.assigns.account})
  end

  def account_inbox(conn, %{}) do
    conn
    |> put_status(:ok)
  end

  def show(conn, %{"username" => username}) do
    case Accounts.get_account_by_username(username) do
      nil ->
        raise ErrorResponse.NotFound, message: "There is no account with that username"

      account ->
        render(conn, :show, account: account)
    end
  end

  def update(conn, %{"id" => id, "account" => account_params}) do
    account = Accounts.get_account!(id)

    with {:ok, %Account{} = account} <- Accounts.update_account(account, account_params) do
      render(conn, :show, account: account)
    end
  end

  def delete(conn, %{"id" => id}) do
    account = Accounts.get_account!(id)

    with {:ok, %Account{}} <- Accounts.delete_account(account) do
      send_resp(conn, :no_content, "")
    end
  end
end

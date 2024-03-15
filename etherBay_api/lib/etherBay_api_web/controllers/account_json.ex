defmodule EtherBayApiWeb.AccountJSON do
  alias EtherBayApi.Accounts.Account
  alias EtherBayApiWeb.{ListingJSON, MessageJSON}

  @doc """
  Renders a list of accounts.
  """
  def index(%{accounts: accounts}) do
    %{data: for(account <- accounts, do: data(account))}
  end

  @doc """
  Renders a single account.
  """
  def show(%{account: account}) do
    %{data: data(account)}
  end

  def account_token(%{account: account, token: token}) do
    %{
      id: account.id,
      username: account.username,
      account_status: account.account_status,
      token: token
    }
  end

  def account_info(%{account: account}) do
    %{
      id: account.id,
      username: account.username,
      account_status: account.account_status
    }
  end

  defp data(%Account{} = account) do
    %{
      id: account.id,
      username: account.username,
      bio: account.bio,
      account_status: account.account_status,
      inserted_at: account.inserted_at,
      listings: ListingJSON.vendor_listings(%{listings: account.listings}),
      messages_received: MessageJSON.index(%{messages: account.messages_received}),
      messages_sent: MessageJSON.index(%{messages: account.messages_sent})
    }
  end
end

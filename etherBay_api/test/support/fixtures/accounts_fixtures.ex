defmodule EtherBayApi.AccountsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `EtherBayApi.Accounts` context.
  """

  @doc """
  Generate a account.
  """
  def account_fixture(attrs \\ %{}) do
    {:ok, account} =
      attrs
      |> Enum.into(%{
        account_status: "some account_status",
        bio: "some bio",
        password: "some password",
        username: "some username"
      })
      |> EtherBayApi.Accounts.create_account()

    account
  end
end

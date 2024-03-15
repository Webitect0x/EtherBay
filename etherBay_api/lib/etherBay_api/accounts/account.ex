defmodule EtherBayApi.Accounts.Account do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "accounts" do
    field(:username, :string)
    field(:password, :string)
    field(:bio, :string)
    field(:account_status, :string)

    has_many(:listings, EtherBayApi.Listings.Listing, foreign_key: :vendor_id)
    has_many(:messages_received, EtherBayApi.Messages.Message, foreign_key: :receiver_id)
    has_many(:messages_sent, EtherBayApi.Messages.Message, foreign_key: :sender_id)

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(account, attrs) do
    account
    |> cast(attrs, [:username, :password, :bio, :account_status])
    |> validate_required([:username, :password, :account_status])
    |> unique_constraint(:username)
    |> validate_length(:username, max: 160)
    |> hash_password
  end

  defp hash_password(%Ecto.Changeset{valid?: true, changes: %{password: password}} = changeset) do
    change(changeset, password: Bcrypt.hash_pwd_salt(password))
  end

  defp hash_password(changeset), do: changeset
end

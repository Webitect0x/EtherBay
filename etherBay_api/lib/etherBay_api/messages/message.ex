defmodule EtherBayApi.Messages.Message do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "messages" do
    field(:content, :string)
    field(:channel_id, :string)
    belongs_to(:sender, EtherBayApi.Accounts.Account)
    belongs_to(:receiver, EtherBayApi.Accounts.Account)

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(message, attrs) do
    message
    |> cast(attrs, [:content, :channel_id, :sender_id, :receiver_id])
    |> validate_required([:content, :channel_id, :sender_id, :receiver_id])
  end
end

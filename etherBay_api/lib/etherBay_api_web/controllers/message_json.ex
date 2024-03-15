defmodule EtherBayApiWeb.MessageJSON do
  alias EtherBayApi.Messages.Message

  @doc """
  Renders a list of messages.
  """
  def index(%{messages: messages}) do
    %{data: for(message <- messages, do: data(message))}
  end

  @doc """
  Renders a single message.
  """
  def show(%{message: message}) do
    %{data: data(message)}
  end

  def message_session_id(%{message: message}) do
    %{
      channel_id: message.channel_id
    }
  end

  defp data(%Message{} = message) do
    %{
      id: message.id,
      content: message.content,
      channel_id: message.channel_id,
      sender_id: message.sender_id,
      receiver_id: message.receiver_id
    }
  end
end

defmodule EtherBayApiWeb.ChatChannel do
  use Phoenix.Channel

  alias EtherBayApi.{Messages, Accounts}

  def join("chat:*", _message, socket) do
    {:ok, socket}
  end

  def handle_in("new_msg", %{"message" => message}, socket) do
    case Accounts.get_account!(message["sender_id"]) do
      nil ->
        broadcast!(socket, "error", %{body: "User doesn't exist"})
        {:noreply, socket}

      _account ->
        Messages.create_message(message)
        broadcast!(socket, "new_msg", %{body: message})
        {:noreply, socket}
    end
  end
end

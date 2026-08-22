"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { SendIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/ui/message";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller";
import { profile } from "@/lib/profile-data";
import { cn } from "@/lib/utils";

const starterPrompts = [
  "What have you built recently?",
  "What's your stack?",
  "Are you open to new roles?",
];

function messageText(parts: { type: string; text?: string }[]) {
  return parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("")
    .replace(/\*\*/g, "");
}

function CloneAvatar() {
  return (
    <Avatar size="sm">
      <AvatarImage
        src="/images/real_aba.jpeg"
        alt={profile.name}
        className="object-cover"
      />
      <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
    </Avatar>
  );
}

export function ChatView() {
  const { messages, sendMessage, status, error } = useChat();
  const [input, setInput] = useState("");

  const isEmpty = messages.length === 0;
  const isThinking =
    status === "submitted" ||
    (status === "streaming" &&
      !messageText((messages.at(-1)?.parts as never[]) ?? []));

  function submit(text: string) {
    const trimmed = text.trim();
    if (!trimmed || status === "streaming" || status === "submitted") return;
    sendMessage({ text: trimmed });
    setInput("");
  }

  return (
    <div
      className={cn("flex min-h-[70vh] flex-col", isEmpty && "justify-center")}
    >
      {!isEmpty && (
        <MessageScrollerProvider autoScroll defaultScrollPosition="last-anchor">
          <MessageScroller className="max-h-[65vh] flex-1">
            <MessageScrollerViewport>
              <MessageScrollerContent className="px-1 py-4">
                {messages.map((message) => {
                  const align = message.role === "user" ? "end" : "start";
                  const text = messageText(message.parts as never[]);
                  if (message.role === "assistant" && !text) return null;
                  return (
                    <MessageScrollerItem
                      key={message.id}
                      messageId={message.id}
                      scrollAnchor={message.role === "user"}
                    >
                      <Message align={align}>
                        <MessageAvatar>
                          {message.role === "user" ? (
                            <Avatar size="sm">
                              <AvatarFallback>You</AvatarFallback>
                            </Avatar>
                          ) : (
                            <CloneAvatar />
                          )}
                        </MessageAvatar>
                        <MessageContent>
                          <Bubble
                            align={align}
                            variant={
                              message.role === "user" ? "default" : "secondary"
                            }
                          >
                            <BubbleContent>{text}</BubbleContent>
                          </Bubble>
                        </MessageContent>
                      </Message>
                    </MessageScrollerItem>
                  );
                })}
                {isThinking && (
                  <Message align="start">
                    <MessageAvatar>
                      <CloneAvatar />
                    </MessageAvatar>
                    <MessageContent>
                      <p className="shimmer px-3 text-sm text-muted-foreground">
                        Thinking…
                      </p>
                    </MessageContent>
                  </Message>
                )}
                {error && (
                  <Message align="start">
                    <MessageAvatar>
                      <CloneAvatar />
                    </MessageAvatar>
                    <MessageContent>
                      <Bubble align="start" variant="destructive">
                        <BubbleContent>
                          Something went wrong reaching the model. Try again in
                          a moment.
                        </BubbleContent>
                      </Bubble>
                    </MessageContent>
                  </Message>
                )}
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
          </MessageScroller>
        </MessageScrollerProvider>
      )}

      <div
        className={cn(
          "mx-auto w-full max-w-xl px-1",
          isEmpty ? "text-center" : "pt-4",
        )}
      >
        {isEmpty && (
          <div className="mb-6 space-y-2">
            <p className="text-lg font-semibold text-foreground">
              Chat with {profile.name.split(" ")[0]}&apos;s AI clone
            </p>
            <p className="text-sm text-muted-foreground">
              Ask about experience, projects, or stack, grounded in what&apos;s
              actually true.
            </p>
          </div>
        )}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(input);
          }}
        >
          <InputGroup>
            <InputGroupInput
              placeholder="Ask me anything about my work…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  submit(input);
                }
              }}
              autoFocus
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                type="submit"
                size="icon-sm"
                disabled={
                  !input.trim() ||
                  status === "streaming" ||
                  status === "submitted"
                }
                aria-label="Send message"
              >
                <SendIcon />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </form>

        {isEmpty && (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {starterPrompts.map((prompt) => (
              <Button
                key={prompt}
                type="button"
                variant="outline"
                size="sm"
                onClick={() => submit(prompt)}
              >
                {prompt}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

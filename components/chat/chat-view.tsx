"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { SendIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Button } from "@/components/ui/button";
import { MessageMarkdown } from "@/components/chat/message-markdown";
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
  "Which work shows your performance focus?",
  "What have you built recently?",
  "Are you open to frontend roles?",
];

function messageText(parts: { type: string; text?: string }[]) {
  return parts
    .filter((part) => part.type === "text")
    .map((part) => part.text)
    .join("");
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
  const { messages, sendMessage, regenerate, status, error } = useChat();
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
    <div className="portfolio-chat flex h-full min-h-0 flex-col">
      {isEmpty ? (
        <div className="portfolio-chat-welcome flex min-h-0 flex-1 flex-col overflow-y-auto px-1 pb-7">
          <div className="portfolio-chat-intro mt-auto">
            <span className="portfolio-chat-eyebrow">A CONVERSATION WITH MY WORK</span>
            <p className="portfolio-chat-title">Chat with {profile.name.split(" ")[0]}&apos;s AI clone</p>
            <p>Ask about my frontend experience, projects, performance work, or the roles I&apos;m looking for.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {starterPrompts.map((prompt) => (
              <Button
                key={prompt}
                type="button"
                variant="outline"
                size="sm"
                className="h-auto min-h-8 rounded-[5px] px-3 py-1.5 text-xs font-normal text-muted-foreground shadow-none hover:text-foreground"
                onClick={() => submit(prompt)}
              >
                {prompt}
              </Button>
            ))}
          </div>
        </div>
      ) : (
        <MessageScrollerProvider autoScroll defaultScrollPosition="last-anchor">
          <MessageScroller className="min-h-0 flex-1">
            <MessageScrollerViewport>
              <MessageScrollerContent className="gap-6 px-1 py-5">
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
                              message.role === "user" ? "default" : "outline"
                            }
                          >
                            <BubbleContent className="rounded-[6px] px-3 py-2.5">
                              {message.role === "assistant" ? (
                                <MessageMarkdown text={text} />
                              ) : (
                                text
                              )}
                            </BubbleContent>
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
                      <p role="status" className="shimmer px-3 text-sm text-muted-foreground">
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
                          <span role="alert" className="block">
                            {error.message || "The chat service is unavailable right now."}
                          </span>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="mt-3"
                            onClick={() => regenerate()}
                          >
                            Retry message
                          </Button>
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
        className={cn("w-full shrink-0 border-t px-1 pt-5", isEmpty ? "border-transparent" : "border-border")}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(input);
          }}
        >
          <InputGroup className="h-11 rounded-[6px] border-border bg-background shadow-[0_1px_2px_oklch(0_0_0_/_0.04)]">
            <InputGroupInput
              placeholder="Ask me anything about my work…"
              aria-label="Ask about Amir's work"
              name="question"
              autoComplete="off"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  submit(input);
                }
              }}
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
                <SendIcon aria-hidden="true" className="size-4" />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </div>
    </div>
  );
}

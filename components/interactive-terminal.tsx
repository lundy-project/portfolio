"use client";

import { useEffect, useRef, useState } from "react";

import {
  education,
  experiences,
  languages,
  profile,
  projects,
  skillCategories,
} from "@/lib/data";

type HistoryEntry = {
  command: string;
  output: React.ReactNode;
};

const PROMPT = "lundy@k3s-cluster:~$";

function Muted({ children }: { children: React.ReactNode }) {
  return <span className="text-white/80">{children}</span>;
}

function Ok({ children }: { children: React.ReactNode }) {
  return <span className="text-success">{children}</span>;
}

const bootOutput = (
  <div>
    <p className="text-white/80">apiVersion: career/v1</p>
    <p className="text-white/80">kind: DevOpsEngineer</p>
    <p className="text-white/80">spec:</p>
    <p className="pl-4 text-white/80">
      platform: <span className="text-terminal-foreground">[k8s, k3s, docker]</span>
    </p>
    <p className="pl-4 text-white/80">
      cicd: <span className="text-terminal-foreground">[jenkins, argocd, github-actions]</span>
    </p>
    <p className="pl-4 text-white/80">
      security: <span className="text-terminal-foreground">[vault, trivy, sonarqube]</span>
    </p>
    <p className="text-white/80">status:</p>
    <p className="pl-4 text-white/80">
      phase: <span className="text-success">Running</span>
    </p>
    <p className="pl-4 text-white/80">
      ready: <span className="text-success">true</span>
    </p>
    <p className="mt-1">
      Type <span className="text-warning">help</span> to see available commands.
    </p>
  </div>
);

function runCommand(raw: string): React.ReactNode | "clear" {
  const command = raw.trim().toLowerCase();

  switch (command) {
    case "":
      return null;
    case "clear":
    case "cls":
      return "clear";
    case "help":
    case "ls":
      return (
        <div>
          <Muted>available commands:</Muted>
          {[
            ["whoami", "who I am"],
            ["skills", "tools I run in production"],
            ["experience", "where I've shipped"],
            ["projects", "things I've built"],
            ["education", "degrees & languages"],
            ["contact", "how to reach me"],
            ["clear", "wipe the terminal"],
          ].map(([cmd, desc]) => (
            <p key={cmd} className="pl-4">
              <span className="text-warning">{cmd.padEnd(12, " ")}</span>
              <Muted># {desc}</Muted>
            </p>
          ))}
        </div>
      );
    case "whoami":
      return (
        <div>
          <p>
            <Ok>{profile.name}</Ok> — {profile.title}
          </p>
          <Muted>{profile.summary}</Muted>
        </div>
      );
    case "skills":
      return (
        <div>
          {skillCategories.map((category) => (
            <p key={category.name}>
              <span className="text-warning">{category.name}:</span>{" "}
              <Muted>{category.skills.join(", ")}</Muted>
            </p>
          ))}
        </div>
      );
    case "experience":
      return (
        <div className="space-y-2">
          {experiences.map((job) => (
            <div key={job.company}>
              <p>
                <Ok>{job.position}</Ok>{" "}
                <Muted>
                  @ {job.company} ({job.period}, {job.type})
                </Muted>
              </p>
              {job.roles.map((role) => (
                <p key={role.title} className="pl-4">
                  <Muted>
                    › {role.title} — {role.period}
                  </Muted>
                </p>
              ))}
            </div>
          ))}
        </div>
      );
    case "projects":
      return (
        <div className="space-y-2">
          {projects.map((project) => (
            <div key={project.name}>
              <p>
                <Ok>{project.name}</Ok>{" "}
                <Muted>
                  ({project.year}) — {project.stack.join(", ")}
                </Muted>
              </p>
              <p className="pl-4">
                <Muted>› {project.bullets[0]}</Muted>
              </p>
            </div>
          ))}
        </div>
      );
    case "education":
      return (
        <div>
          {education.map((entry) => (
            <p key={entry.degree}>
              <Ok>{entry.degree}</Ok>{" "}
              <Muted>
                — {entry.school} ({entry.period})
                {entry.detail ? ` · ${entry.detail}` : ""}
              </Muted>
            </p>
          ))}
          <p>
            <span className="text-warning">languages:</span>{" "}
            <Muted>
              {languages.map((l) => `${l.name} (${l.level})`).join(", ")}
            </Muted>
          </p>
        </div>
      );
    case "contact":
    case "ping":
    case "ping lundy":
      return (
        <div>
          <p>
            <span className="text-warning">email:</span>{" "}
            <a href={`mailto:${profile.email}`} className="underline">
              {profile.email}
            </a>
          </p>
          <p>
            <span className="text-warning">telegram:</span>{" "}
            <a href={profile.telegram} target="_blank" rel="noreferrer" className="underline">
              {profile.telegram}
            </a>
          </p>
          <p>
            <span className="text-warning">github:</span>{" "}
            <a href={profile.github} target="_blank" rel="noreferrer" className="underline">
              {profile.github}
            </a>
          </p>
          <p>
            <span className="text-warning">linkedin:</span>{" "}
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline">
              {profile.linkedin}
            </a>
          </p>
        </div>
      );
    case "sudo hire lundy":
    case "hire":
    case "hire --me":
      return (
        <p>
          <Ok>deployment &quot;lundy&quot; created.</Ok>{" "}
          <Muted>
            Reach out on{" "}
            <a href={profile.telegram} target="_blank" rel="noreferrer" className="underline">
              Telegram
            </a>{" "}
            to finish the rollout.
          </Muted>
        </p>
      );
    default:
      return (
        <p>
          <span className="text-destructive">
            bash: {command.split(" ")[0]}: command not found
          </span>{" "}
          <Muted>— try `help`</Muted>
        </p>
      );
  }
}

export function InteractiveTerminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { command: "kubectl get engineer lundy -o yaml", output: bootOutput },
  ]);
  const [input, setInput] = useState("");
  const [commandLog, setCommandLog] = useState<string[]>([]);
  const [logIndex, setLogIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history]);

  function submit() {
    const output = runCommand(input);
    if (output === "clear") {
      setHistory([]);
    } else {
      setHistory((prev) => [...prev, { command: input, output }]);
    }
    if (input.trim()) {
      setCommandLog((prev) => [...prev, input]);
    }
    setLogIndex(-1);
    setInput("");
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      submit();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (commandLog.length === 0) return;
      const next = logIndex === -1 ? commandLog.length - 1 : Math.max(0, logIndex - 1);
      setLogIndex(next);
      setInput(commandLog[next]);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (logIndex === -1) return;
      const next = logIndex + 1;
      if (next >= commandLog.length) {
        setLogIndex(-1);
        setInput("");
      } else {
        setLogIndex(next);
        setInput(commandLog[next]);
      }
    }
  }

  return (
    <div
      className="cursor-text overflow-hidden rounded-xl border border-border/60 bg-terminal shadow-xl"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-xs text-white/50">
          lundy@k3s-cluster: ~ — interactive
        </span>
      </div>
      <div
        ref={scrollRef}
        className="h-80 space-y-2 overflow-y-auto p-4 font-mono text-xs leading-relaxed text-terminal-foreground sm:text-sm"
      >
        {history.map((entry, index) => (
          <div key={index}>
            <p>
              <span className="text-white/50">{PROMPT}</span> {entry.command}
            </p>
            {entry.output}
          </div>
        ))}
        <p className="flex items-center">
          <span className="shrink-0 text-white/50">{PROMPT}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={onKeyDown}
            className="ml-2 w-full bg-transparent text-terminal-foreground caret-terminal-foreground outline-none placeholder:text-white/30"
            placeholder="type `help`"
            aria-label="Terminal command input"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        </p>
      </div>
    </div>
  );
}

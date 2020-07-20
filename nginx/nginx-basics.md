# Nginx from Beginner to Pro

## Introduction

Directives define how yur web server operates

There are quite a few different contexts available in Nginx: for example, main, events, HTTP, server, location, upstream, if, stream, mail, etc.

---

## Warning levels

| name  | meaning |
|-------|---------|
| info | information |
| notice | Notice |
| warn | Warnings|
| error | Error |
| crit | Critical |
| alert | High Alert |
| emerg | Emergency

---

## Event Directive

multi_accept is set to off by default. It means that a worker process will accept only one new connection at a time by default. It is a generally a good idea to enable multi_accept so that Nginx can accept as many connections as possible

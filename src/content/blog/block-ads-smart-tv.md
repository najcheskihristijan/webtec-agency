---
title: "How to Block Ads on Smart TV: The Easy Method (Pi-hole Guide 2026)"
description: "Tired of ads on your Samsung or LG TV? Pi-hole blocks them network-wide. Here's how to set it up in 30 minutes."
pubDate: 2026-04-01
author: "Christian Webtec"
heroImage: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1200&q=80"
---

Smart TVs are ad machines. You can't install AdBlock on a TV, and the built-in ads are getting worse every year.

The solution? **Pi-hole**—a network-wide ad blocker that works on every device in your house, including your TV.

## What Is Pi-hole?

Pi-hole is a DNS-level ad blocker. Instead of blocking ads on each device, it blocks them at your router level.

**The Result:** No ads on your TV, phone, tablet, or laptop. All from one device.

## What You Need

- **Raspberry Pi Zero 2 W** ($15) or any old computer
- **MicroSD Card** (8GB+, $8)
- **30 minutes**

Total cost: ~$25.

## Step-by-Step Setup

### Step 1: Install Pi-hole OS
1.  Download the **Raspberry Pi Imager** (free).
2.  Flash "Pi-hole OS" to your microSD card.
3.  Insert the card into your Raspberry Pi and power it on.

### Step 2: Configure Your Router
1.  Log into your router's admin panel (usually `192.168.1.1`).
2.  Find the **DNS settings**.
3.  Change the primary DNS to your Pi-hole's IP address (e.g., `192.168.1.100`).

### Step 3: Test It
Open YouTube on your TV. The pre-roll ads should be gone.

## What Gets Blocked?

- YouTube ads (on TV)
- Banner ads on websites
- Tracking scripts
- Malware domains

## What Doesn't Get Blocked?

- YouTube ads on mobile apps (they use the same domain as videos)
- Sponsored content (like Instagram ads)
- First-party ads (like Amazon's product recommendations)

## Advanced: Custom Block Lists

Pi-hole comes with default block lists, but you can add more:
- **OISD Big List:** Blocks 1.5 million domains.
- **Hagezi Pro:** Aggressive blocking (may break some sites).

Add these in the Pi-hole admin panel under **Group Management > Adlists**.

## Troubleshooting

**Problem:** Some websites break.  
**Solution:** Whitelist them in Pi-hole settings.

**Problem:** Ads still appear on TV.  
**Solution:** Your TV might be using hardcoded DNS (like Google's 8.8.8.8). Block port 53 on your router to force it to use Pi-hole.

## Conclusion

For $25 and 30 minutes, you can block ads on every device in your home. Pi-hole is the single best investment for a cleaner internet experience.

Pair this with our [Home Server Privacy Guide](/blog/home-server-privacy) for a complete self-hosted setup.

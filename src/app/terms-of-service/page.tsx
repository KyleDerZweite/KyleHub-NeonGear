'use client'

import MarkdownEditor from '@/components/MarkdownEditor'

export default function TermsOfService() {
    const termsOfServiceMd = `# Terms of Service

_Last Updated: 2025-03-28_

## 1. Introduction
Welcome to **NeonGear**, the Discord bot designed to enhance your server experience! By using NeonGear, you agree to the following terms. If you do not agree, please do not use the bot.

## 2. Usage of the Bot
NeonGear provides various features, including moderation, leveling, and general server utilities. By using the bot, you acknowledge that:
- You will not exploit, abuse, or attempt to harm the bot or its services.
- You will comply with Discord's Terms of Service and Community Guidelines.
- The bot is provided "as is" without any guarantees.

## 3. Data Collection
NeonGear does **not** collect personal data. The only stored data is related to the leveling system (such as XP and rank). No sensitive or private information is collected, stored, or shared.

## 4. Limitation of Liability
The bot owner is not responsible for any damages, data loss, or issues caused by the use of NeonGear. Use it at your own risk.

## 5. Termination
The owner reserves the right to restrict or terminate access to the bot at any time without prior notice.

## 6. Changes to These Terms
These Terms may be updated from time to time. Continued use of the bot after updates implies acceptance of the changes.

For any questions, feel free to contact the bot owner.

---

**Bot Owner Contact:** KyleDerZweite
`;

    return (
        <div className="container mx-auto pt-24 px-4 py-12">
            <MarkdownEditor
                title="NeonGear Terms of Service"
                filename="terms-of-service.md"
                content={termsOfServiceMd}
            />
        </div>
    )
}
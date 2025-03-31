'use client'

import MarkdownEditor from '@/components/MarkdownEditor'

export default function PrivacyPolicy() {
    const privacyPolicyMd = `# Privacy Policy

_Last Updated: 2025-03-28_

## 1. Introduction
This Privacy Policy explains how **NeonGear** handles user data. By using the bot, you acknowledge and agree to this policy.

## 2. Data Collection and Usage
NeonGear does **not** collect or store any personal data. The only data stored is related to the bot's leveling system, such as:
- User ID (to associate levels with a specific user)
- XP and Rank (to track leveling progress)

This data is used solely to provide the leveling feature and is not shared with third parties.

## 3. Data Sharing
NeonGear does not sell, share, or distribute any user data. Your leveling data remains private within the bot's system.

## 4. Data Retention and Removal
The stored leveling data is retained as long as the bot is in use. If you wish to have your leveling data removed, please contact the bot owner.

## 5. Changes to This Policy
This Privacy Policy may be updated from time to time. Continued use of the bot after updates implies acceptance of the changes.

For any questions or data removal requests, please contact:

**Bot Owner Contact:** KyleDerZweite
`;

    return (
        <div className="container mx-auto pt-24 px-4 py-12">
            <MarkdownEditor
                title="NeonGear Privacy Policy"
                filename="privacy-policy.md"
                content={privacyPolicyMd}
            />
        </div>
    )
}
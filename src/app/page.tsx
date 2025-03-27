import HeroSection from '@/components/HeroSection'
import TerminalCard from '@/components/TerminalCard'
import DiscordWidget from '@/components/DiscordWidget'
import GitHubStats from '@/components/GitHubStats'

export default function Home() {
    return (
        <>
            <HeroSection />
            <TerminalCard />
            <GitHubStats />
            <DiscordWidget />
        </>
    )
}
import { QuartzComponentConstructor } from "./types";
import landingStyle from "./styles/landing.scss"

export const TOTAL_CARDS = 3
export const CARDS = {
    "info": {
        <a href = {"/info"}>
            <div class = "card card-1">
                <p class="card-title">Info</p>
                <p class="card-subhead">About Me</p>
            </div>
        </a>

    },
    "year-1": {
        <a href = {"/First-Year"}>
            <div class = "card card-2">
                <p class="card-title">First Year</p>
                <p class="card-subhead">First Year Content</p>
            </div>
        </a>
    },
    "year-2": {
        <a href = {"/Second-Year"}>
            <div class = "card card-3">
                <p class="card-title">Second Year</p>
                <p class="card-subhead">Second Year Content</p>
            </div>
        </a>
    },
}

export default (() => {
    function LandingComponent() {
        return (
            <div>
                <div class = "content-container">
                    <p class = "landing-header">Welcome!</p>
                    <p class = "page-subhead">
                        Subheading test
                    </p>

                    <div class="issue-container">
                        {Object.values(CARDS)}
                        {Array(TOTAL_CARDS - Object.keys(CARDS).length).fill(0).map(() => (
                            <div class="card card-coming">
                                <p class="card-title">Coming Soon</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    LandingComponent.css = landingStyle
    return LandingComponent
}) satisfies QuartzComponentConstructor
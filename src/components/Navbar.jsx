import NavBarLinks from '../../framer/nav-bar-links'

export default function Navbar() {
    return (
        <div className="relative z-50 w-full flex justify-center pt-8 pb-8">
            <div className="flex items-center gap-6">
                <NavBarLinks.Responsive />
            </div>
        </div>
    )
}

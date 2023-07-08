import './style.css'

import icon_folder from '../../assets/folder.svg'
import icon_git_branch from '../../assets/git-branch.svg'
import icon_stars from '../../assets/star.svg'


const GitCard = () => {
    return (
        <div className="git-card">
            <header>
                <img src={icon_folder} alt="" />
                <span>My Project 01</span>
            </header>
            <p>Um código feito por um noob, Um código feito por um noob Um código </p>
            <footer className='footer'>
                <div className='container_icons_footer'>
                    <img src={icon_git_branch} alt="Icone git branch" />
                    <span>100</span>
                    <img src={icon_stars} alt="icon Starts" />
                    <span>100</span>
                </div>
                <div className='ctn_javascript'>
                    <div></div>
                    <h6>javascript</h6>
                </div>
            </footer>
        </div>
    )
}

export default GitCard;
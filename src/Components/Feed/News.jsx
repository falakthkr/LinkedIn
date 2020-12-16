import React from "react"

class News extends React.Component{
    render(){
        return(
            <div style={{margin:"40px"}}>
                <div class="card">
                    <div class="card-body">
                        <h6 class="display-6">LinkedIn News</h6>
                        <hr />
                        <ul>
                            <li>
                                WFH is fine ... if a little lonely
                                <br />
                                <small class="text-muted">7h ago | 212 reader</small>
                            </li>
                            <hr />
                            <li>
                                Election 2020 : The latest updates
                                <br />
                                <small class="text-muted">1h ago | 117,805 readers</small>
                            </li>
                            <hr />
                            <li>
                                Foreign students shun MBAs in US
                                <br />
                                <small class="text-muted">23h ago | 28,638 reader</small>
                            </li>
                            <hr />
                            <li>
                                The post-pandemic skills you'll need
                                <br />
                                <small class="text-muted">2d ago | 4,636 readers</small>
                            </li>
                            <hr />
                            <li>
                                Another cheque for Reliance Retail
                                <br />
                                <small class="text-muted">1d ago | 337 readers</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
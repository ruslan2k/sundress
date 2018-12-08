import React, { Component } from 'react';
import {
  Tab,
  TabBarItem,
  Article
} from "react-weui";
import ContactsPage from './ContactsPage';

// import IconButton from '../home/images/icon_nav_button.png';
// import IconMsg from '../home/images/icon_nav_msg.png';
// import IconArticle from '../home/images/icon_nav_article.png';

const IconGreenButton = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Green_dot.svg/450px-Green_dot.svg.png';

export default class HomePage extends Component {
    render() {
        return (
            <Tab type="tabbar">
                <TabBarItem icon={<img src={IconGreenButton}/>} label="Tab1">
                  {ContactsPage}
                </TabBarItem>
                <TabBarItem icon={<img src={IconGreenButton}/>} label="Tab2">
                    <Article>
                        <h1>Page 2</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>2.1 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                        </section>
                    </Article>
                </TabBarItem>
                <TabBarItem icon={<img src={IconGreenButton}/>} label="Tab3">
                    <Article>
                        <h1>Page 3</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>3.1 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                        </section>
                    </Article>
                </TabBarItem>
            </Tab>
        );
    }
};


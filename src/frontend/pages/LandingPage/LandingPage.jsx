import React from 'react';
import { Block } from "@randajan/jet-react/dom/block";

import "./LandingPage.scss";
import { Link } from '@randajan/jet-react/dom/link';
import { Caption } from '@randajan/jet-react/dom/caption';
import { Tile } from '@randajan/jet-react/dom/tile';


export const LandingPage = (props)=>{
    const {} = props;
    
    return (
        <Block className="LandingPage slab" level={0}>
            <div className="title">
                <Caption>tvuj.cloud</Caption>
            </div>
            <div className="controls">
                <Link className="button" to="https://tvuj.cloud/RDWeb" target>
                    <Tile src={"/static/ico/rdp.svg"} caption={"Stáhnout RDP"}/>
                </Link>
                <Link className="button" to="https://tvuj.cloud/RDWeb/webclient/index.html" target>
                    <Tile src={"/static/ico/online.svg"} caption={"Spustit online"}/>
                </Link>
            </div>
        </Block>
    )
}


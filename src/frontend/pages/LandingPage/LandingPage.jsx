import React, { useEffect } from 'react';
import { Block } from "@randajan/jet-react/dom/block";

import "./LandingPage.scss";
import { Link } from '@randajan/jet-react/dom/link';
import { Caption } from '@randajan/jet-react/dom/caption';
import { Tile } from '@randajan/jet-react/dom/tile';
import { usePop } from '@randajan/jet-react/dom/modal';
import { page } from '@randajan/jet-react/base/page';

import { InfoPop } from "../../frames/InfoPop/InfoPop";

export const LandingPage = (props)=>{
    const {} = props;

    const [ _si ]= page.use("hash.info");
    const si = _si.get();

    const pop = usePop({onDown:_=>_si.remove(), children:<InfoPop/>});
    
    useEffect(_=>{
        if (si) { pop.up(); } else { pop.down(); }
    }, [si]);

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
            <Link className="button circle info" to={"#info=show"}>?</Link>
        </Block>
    )
}


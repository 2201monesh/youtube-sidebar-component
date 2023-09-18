import React from 'react'
import { RxCross1 } from 'react-icons/rx';
import { LuMoreVertical } from 'react-icons/lu';
import { TiArrowShuffle } from 'react-icons/ti';
import { TbArrowsRightLeft } from 'react-icons/tb';

function Sidebar({videos}) {
  return (
    <div className='sidebar-main'>
      <div className="sidebar-upper">
        <div className="sidebar-upper-left">
            <div className="sidebar-upper-left-1">Main heading goes here</div>
            <div className="sidebar-upper-left-2">Sub heading goes here</div>
            <div className="sidebar-upper-left-3">
                <p className='logo logo-left'><TbArrowsRightLeft /></p>
                <p className='logo logo-left' ><TiArrowShuffle /></p>
            </div>
        </div>

        <div className="sidebar-upper-right">
            <p className='logo-1'><RxCross1 className='logo' /></p>
            <p className='logo-2'><LuMoreVertical className='logo' /></p>
        </div>
      </div>




      <div className="sidebar-lower">Sidebar Lower</div>
    </div>
  )
}

export default Sidebar;

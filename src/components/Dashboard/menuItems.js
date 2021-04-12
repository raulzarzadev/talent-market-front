import WorkIcon from '@material-ui/icons/Work'
import MapIcon from '@material-ui/icons/Map'
import DataUsageIcon from '@material-ui/icons/DataUsage'
import GroupIcon from '@material-ui/icons/Group'
import BusinessIcon from '@material-ui/icons/Business'
import NearMeIcon from '@material-ui/icons/NearMe'
import ListAltIcon from '@material-ui/icons/ListAlt'

import ReplyIcon from '@material-ui/icons/Reply'
export default [
  {
    label: 'Dashboard',
    disabled: false,
    icon: <DataUsageIcon />,
    href: '/dashboard',
  },
  {
    label: 'Job Orders',
    disabled: true,
    icon: <WorkIcon />,
    href: '/',
  },
  {
    label: 'Market',
    disabled: false,
    icon: <GroupIcon />,
    href: '/dashboard/market',
  },
  {
    label: 'Companies',
    disabled: true,
    icon: <BusinessIcon />,
    href: '/dashboard/companies',
  },
  {
    label: 'S. Projects',
    disabled: true,
    icon: <NearMeIcon />,
    href: '/dashboard/projects',
  },
  {
    label: 'Map',
    disabled: false,
    icon: <MapIcon />,
    href: '/dashboard/map',
  },
  {
    label: 'Task Tool',
    disabled: true,
    icon: <ListAltIcon />,
    href: '/dashboard/task',
  },
  {
    label: 'Sendouts',
    disabled: true,
    icon: <ReplyIcon />,
    href: '/dashboard/sendout',
  },
]

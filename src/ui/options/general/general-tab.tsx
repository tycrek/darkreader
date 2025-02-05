import {m} from 'malevic';
import type {ViewProps} from '../../../definitions';
import {isFirefox} from '../../../utils/platform';
import {ChangeBrowserTheme} from './change-browser-theme';
import {ContextMenus} from './context-menus';
import {DetectDarkTheme} from './detect-dark-theme';
import {EnabledByDefault} from './enabled-by-default';

export default function GeneralTab(props: ViewProps): Malevic.Child {
    return <div class="settings-tab">
        <EnabledByDefault {...props} />
        <DetectDarkTheme {...props} />
        <ContextMenus {...props} />
        {isFirefox ? <ChangeBrowserTheme {...props} /> : null}
    </div>;
}

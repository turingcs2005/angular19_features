Each component has its own change detection strategy of either default or on-push.
- default: always check everything, just in case something changed (safer, less efficient)
- on-push: only check me when something relevant (input, async pipe) to me has clearly changed (more efficient, less safe)

<table>
<tr>
    <th>default
    </th>
    <th>on-push
    </th>
</tr>
<tr>
    <td colspan="2">Change detection triggers<td>
<tr>
<tr>
    <td>
        <ul>
            <li>User input</li>
            <li>setTimeout(), setInterval()</li>
            <li>HTTP call</li>
            <li>Observable emission</li>
            <li>DOM events (button click, keyup/down, etc.)</li>
        </ul>
    </td>
    <td>
        <ul>
            <li>@Input() reference change</li>
            <li>Event triggered inside the component (e.g. button click, input)</li>
            <li>markForCheck() called manually</li>
            <li>Observable bound in the template emits a new value</li>
        </ul>
    </td>
</tr>
<tr>
    <td colspan="2">Usage<td>
<tr>
<tr>
    <td>Simple components</td>
    <td>Performance-critical components</td>
</tr>
</table>

You can use ngDoCheck() lifecycle hook to log change detection cycles.

For most components, the default change detection strategy will suffice, with maybe some occasional tweaks here and there. The real problem occurs when change detection fails to detect the need for UI refresh.


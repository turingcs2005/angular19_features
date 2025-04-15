<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    border: 1px solid #000; /* solid black line */
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
</style>

Each component has its own change detection strategy of either default or on-push.
- default: always check everything, just in case something changed (safer, less efficient)
- on-push: only check me when something relevant (input, async pipe) to me has clearly changed (more efficient, less safe)

<table>
<tr>
  <th colspan="3" style="text-align: center">A Comparison of Change Detection Strategies</th>
</tr>
<tr><td>Strategy</td>
    <td style="text-align: center">default</td>
    <td style="text-align: center">on-push</td>
</tr>
<tr>
  <td>pros and cons</td>
  <td>triggers more often, checks more components, but computationally expensive</td>
  <td>triggers less often, checks fewer components, but computationally parsimonious</td>
</tr>
<tr>
    <td>Triggers</td>
    <td>
        <ul>
            <li>@Input() reference change</li>
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
    <td>Usage</td>
    <td>Simple components</td>
    <td>Performance-critical components</td>
</tr>
</table>

When change detection is run, Angular checks all data bindings in the templates. You can use <mark>ngDoCheck()</mark> lifecycle hook to log change detection cycles.

For most components, the default change detection strategy will suffice, with maybe some occasional tweaks here and there. The real problem occurs when 
- Change detection fails to trigger;
- Change detection triggers but fails to detect change(s).


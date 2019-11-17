<template>
  <div>
    <div class="page-title">
      <h3>Record History</h3>
    </div>

    <div class="history-chart">
      <canvas></canvas>
    </div>

    <section>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Summ</th>
            <th>Date</th>
            <th>Categories</th>
            <th>Type</th>
            <th>Open</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>1212</td>
            <td>12.12.32</td>
            <td>name</td>
            <td>
              <span class="white-text badge red">Consumption</span>
            </td>
            <td>
              <button class="btn-small btn">
                <i class="material-icons">open_in_new</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

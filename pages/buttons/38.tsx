function Button() {
  return (
    <>
      <div id="viewer">
        <div className="px-4 py-8">
          <h2 className="text-5xl font-bold">Button #38</h2>
          <div className="py-5">
            <a href="/buttons/38" className="bn3637 bn38">
              Button
            </a>
          </div>
          <h2 className="text-2xl font-semibold">
            Creator:{" "}
            <a
              href="https://getcssscan.com/?ref=cssbuttonsapp"
            >
              CSS Scan
            </a>
          </h2>
          <div>
            <pre className="code">{`<a href="/" class="bn3637 bn38">Hover</a>`}</pre>
          </div>
          <div>
            <pre className="code">{`.bn3637 {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 2rem;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  backface-visibility: hidden;
  border: 0.3rem solid transparent;
  border-radius: 3rem;
}
.bn38 {
  border-color: transparent;
  transition: background-color 0.3s ease-in-out;
}
  
.bn38:hover {
  background-color: #60605e;
}`}</pre>
          </div>
        </div>
      </div>
    </>
  );
}

export default Button;

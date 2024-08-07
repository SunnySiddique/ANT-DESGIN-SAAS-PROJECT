import { SearchOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import "./friends.css";

import { Button } from "@mui/material";
import { useState } from "react";
import { FriendsData } from "../../../../data/FrinedsData";

const Friends = () => {
  const [search, setSearch] = useState("");

  const filteredFriends = FriendsData.filter((findCard) => {
    const searchItem = search ? search.toLowerCase() : "";
    const friendName = findCard.name.toLowerCase();
    return searchItem === "" || friendName.includes(searchItem);
  });

  return (
    <main style={{ height: "82vh" }}>
      <div className="Friends-name">
        <p>Friends</p>
      </div>
      <div className="Friends-input">
        <SearchOutlined className="search-input" />
        <input
          type="text"
          placeholder="Search Friends..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <section>
        <Row gutter={24}>
          {filteredFriends.map((Fir) => (
            <Col key={Fir.id} xs={24} sm={12} md={12} lg={8}>
              <Card style={{ marginBottom: "30px" }}>
                <div className="Friends-card-main">
                  <div className="friends-img">
                    <img src={Fir.image} alt={Fir.name} />
                  </div>
                  <div className="friends-content">
                    <p>{Fir.name}</p>
                    <small>{Fir.workTitle}</small>
                  </div>
                  <div className="friends-icons-main">
                    <div className="friends-icons">
                      {Fir.icons.map((s) => (
                        <Button key={s.key}>{s.svg}</Button>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </main>
  );
};

export default Friends;

import ImageSlider from "../../components/ImageSlider";
import Notice from "../../components/Notice";
import AppLayout from "../../components/common/AppLayout";
import Title from "../../components/common/Title";
import styled from "@emotion/styled/macro";

const data = {
  code: 200,
  message: "공지사항 조회 성공",
  data: {
    page: 1,
    totalPages: 41,
    notices: [
      {
        noticeId: 1,
        title: "장학금안내",
        noticeDate: "2024-02-02",
        isScrapped: false,
        url: "www.aaa.com",
      },
      {
        noticeId: 1,
        title: "장학금",
        noticeDate: "2024-02-02",
        isScrapped: false,
        url: "www.aaa.com",
      },
    
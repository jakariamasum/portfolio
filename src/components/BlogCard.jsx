import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = ({
  title,
  excerpt,
  date,
  readTime,
  imageUrl,
  category,
  link,
}) => {
  return (
    <>
      <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative">
            <img
              src={imageUrl || ""}
              alt={title}
              className="w-full h-56 object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#0f1629] text-[#3BCCA8] px-3 py-1 rounded-full text-xs font-semibold">
              {category}
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-3 line-clamp-2">{title}</h2>
            <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{date}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-2 h-4 w-4" />
                <span>{readTime}</span>
              </div>
            </div>
            <Link to={link} target="_blank">
              <Button variant="outline" className="w-full group text-[#0f1629]">
                Read More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Card>
      </motion.div>
    </>
  );
};

export default BlogCard;
